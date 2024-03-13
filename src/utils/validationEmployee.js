export const firstName_validation = {
  name: 'firstName',
  label: 'First Name',
  type: 'text',
  id: 'firstName',
  placeholder: 'Enter your first name...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const lastName_validation = {
  name: 'lastName',
  label: 'Last Name',
  type: 'text',
  id: 'lastName',
  placeholder: 'Enter your last name...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const position_validation = {
  name: 'position',
  label: 'Employee Position',
  type: 'text',
  id: 'position',
  placeholder: 'Enter employee position...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const joinDate_validation = {
  name: 'joinDate',
  label: 'Join Date',
  type: 'date',
  id: 'joinDate',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const experience_validation = {
  name: 'experience',
  label: 'Years of Experience',
  type: 'number',
  id: 'experience',
  placeholder: 'Enter years of experience...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const aboutEmployee_validation = {
  name: 'aboutEmployee',
  label: 'About Employee',
  multiline: true,
  id: 'aboutEmployee',
  placeholder: 'Write about the employee...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 500,
      message: '500 characters max',
    },
  },
}
