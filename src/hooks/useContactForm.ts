// src/hooks/useContactForm.ts
// Reusable hook for Web3Forms integration using @web3forms/react and react-hook-form.

import { useState } from 'react';
import {
  useForm,
  type FieldValues,
  type UseFormRegister,
  type FieldErrors,
  type UseFormReset,
  type DefaultValues,
} from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface UseContactFormOptions<T extends FieldValues = FieldValues> {
  accessKey?: string;
  subject?: string;
  fromName?: string;
  defaultSuccessMessage?: string;
  defaultErrorMessage?: string;
  defaultValues?: DefaultValues<T>;
  onSuccess?: (msg: string, data: unknown) => void;
  onError?: (msg: string, data: unknown) => void;
}

export interface UseContactFormReturn<T extends FieldValues = FieldValues> {
  register: UseFormRegister<T>;
  handleSubmit: (
    onValid: (data: T) => void | Promise<void>,
    onInvalid?: (errors: FieldErrors<T>) => void | Promise<void>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  reset: UseFormReset<T>;
  errors: FieldErrors<T>;
  isSubmitting: boolean;
  isSuccess: boolean;
  status: ContactFormStatus;
  message: string;
  onSubmit: (data: T) => Promise<void>;
  submitHandler: (e?: React.BaseSyntheticEvent) => Promise<void>;
  setStatus: React.Dispatch<React.SetStateAction<ContactFormStatus>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export function useContactForm<T extends FieldValues = FieldValues>({
  accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
  subject = 'New Contact Inquiry — TradeKing Marketing',
  fromName = 'TradeKing Marketing Website',
  defaultSuccessMessage = "Thanks! We'll be in touch within 24 hours.",
  defaultErrorMessage = 'Something went wrong. Please try again or call us directly.',
  defaultValues,
  onSuccess,
  onError,
}: UseContactFormOptions<T> = {}): UseContactFormReturn<T> {
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<ContactFormStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<T>({
    mode: 'onTouched',
    defaultValues,
  });

  const { submit: submitToWeb3Forms } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: fromName,
      subject: subject,
    },
    onSuccess: (msg: string, data: unknown) => {
      setIsSuccess(true);
      setStatus('success');
      const finalMsg = msg || defaultSuccessMessage;
      setMessage(finalMsg);
      reset();
      onSuccess?.(finalMsg, data);
    },
    onError: (msg: string, data: unknown) => {
      setIsSuccess(false);
      setStatus('error');
      const finalMsg = msg || defaultErrorMessage;
      setMessage(finalMsg);
      onError?.(finalMsg, data);
    },
  });

  const onSubmit = async (data: T) => {
    // If access key is missing or placeholder, handle gracefully
    if (!accessKey || accessKey === 'your_access_key_here') {
      setIsSuccess(false);
      setStatus('error');
      const missingKeyMsg =
        'Web3Forms access key is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file.';
      setMessage(missingKeyMsg);
      onError?.(missingKeyMsg, null);
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      await submitToWeb3Forms(data);
    } catch (err: unknown) {
      setIsSuccess(false);
      setStatus('error');
      const errorMsg =
        err instanceof Error && err.message
          ? err.message
          : defaultErrorMessage;
      setMessage(errorMsg);
      onError?.(errorMsg, err);
    }
  };

  const submitHandler = handleSubmit(onSubmit, (fieldErrors) => {
    setIsSuccess(false);
    setStatus('error');
    const firstError = Object.values(fieldErrors)[0]?.message as string;
    const errorMsg =
      firstError || 'Please complete all required fields before submitting.';
    setMessage(errorMsg);
  });

  return {
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting: isSubmitting || status === 'submitting',
    isSuccess,
    status,
    message,
    onSubmit,
    submitHandler,
    setStatus,
    setMessage,
  };
}

export default useContactForm;
