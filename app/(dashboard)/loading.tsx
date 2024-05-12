import { Loader2 } from 'lucide-react'
import React from 'react'

function loading() {
    return (
        <div className='flex w-full min-h-screen justify-center mt-[64px]'><Loader2 className='w-[40px] h-[40px] animate-spin' /></div>
    )
}

export default loading