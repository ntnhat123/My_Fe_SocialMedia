"use client"
import React from 'react'
import RegisterAuth from '@/containers/auth/RegisterAuth'

type Props = {}

const Register = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from-sky-300 to-pink-400'>
      <RegisterAuth />
    </div>
  )
}

export default Register