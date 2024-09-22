'use client'

import { useEffect } from 'react'

export default function RCC() {
    useEffect(() => {
        console.log('You Clicked RCC!')
    }, [])

    return <div>This is rendered by client</div>
}