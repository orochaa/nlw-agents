/* eslint-disable react/no-multi-comp */
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import type * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import React, { createContext, useContext, useId } from 'react'
import type { ReactNode } from 'react'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
} from 'react-hook-form'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'

const Form = FormProvider

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as FormFieldContextValue
)

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>): React.JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

interface FormItemContextValue {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as FormItemContextValue
)

function FormItem({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element {
  const id = useId()

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FormItemContext.Provider value={{ id }}>
      <div
        className={cn('grid gap-2', className)}
        data-slot="form-item"
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>): React.JSX.Element {
  const { error, formItemId } = useFormField()

  return (
    <Label
      className={cn('data-[error=true]:text-destructive', className)}
      data-error={!!error}
      data-slot="form-label"
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({
  ...props
}: React.ComponentProps<typeof Slot>): React.JSX.Element {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
      }
      aria-invalid={!!error}
      data-slot="form-control"
      id={formItemId}
      {...props}
    />
  )
}

function FormDescription({
  className,
  ...props
}: React.ComponentProps<'p'>): React.JSX.Element {
  const { formDescriptionId } = useFormField()

  return (
    <p
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="form-description"
      id={formDescriptionId}
      {...props}
    />
  )
}

function FormMessage({
  className,
  ...props
}: React.ComponentProps<'p'>): ReactNode {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <p
      className={cn('text-destructive text-sm', className)}
      data-slot="form-message"
      id={formMessageId}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
