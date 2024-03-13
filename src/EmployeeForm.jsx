import React from 'react'
import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  firstName_validation,
  lastName_validation,
  position_validation,
  joinDate_validation,
  experience_validation,
  aboutEmployee_validation,
} from './utils/validationEmployee'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const EmployeeForm = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log('Submitted data:', data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...firstName_validation} />
          <Input {...lastName_validation} />
          <Input {...position_validation} />
          <Input {...joinDate_validation} />
          <Input {...experience_validation} />
          <Input {...aboutEmployee_validation} className="md:col-span-2" />
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
