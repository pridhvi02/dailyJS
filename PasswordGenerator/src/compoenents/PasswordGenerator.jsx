import React,{useCallback, useEffect, useRef, useState} from 'react'

const PasswordGenerator = () => {
    const [password , setPassword] = useState('');
    const [length , setLength] = useState(8);
    const [ numbersAllowed , setNumbersAllowed ] = useState(false);
    const [ charactersAllowed , setCharactersAllowed ] = useState(false);
    const passwordRef = useRef(null)

    const generaterpassword=useCallback(()=>{
        let pass = '';
        let str =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(charactersAllowed){
            str += '!@#$%^&*()_+~`|}{[]:;?><';
        }
        if(numbersAllowed){
            str += '0123456789';
        }

        for(let i = 0;i<length ; i++){
            const char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char);
        }
        setPassword(pass);
    },[length ,  numbersAllowed , charactersAllowed]);

    useEffect(()=>{
        generaterpassword()
    },[length,numbersAllowed,charactersAllowed  ])

    const copiedToClipboard=()=>{
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select()

    }

    return (
        <div className='w-full  max-w-md px-4 py-5 my-7 mx-auto rounded-md shadow-lg text-orange-600'>
            <h1 className='text-white text-center'>Password Generator</h1>
            <div className='flex mb-4 overflow-hidden gap-3' >
                <input type='text'
                value={password}
                className='outline-none w-full p-2 rounded-md text-gray-600'
                placeholder='password'
                ref={passwordRef}
                readOnly
                />
                <button className='bg-blue-500 px-2 rounded-lg text-white ' onClick={copiedToClipboard}>copy</button>

            </div>
            <div className='flex text-sm gap-x-2'>
                {/* setting a range to select */}
                <input
                type='range'
                min={6}
                max={100}
                className='cursor-pointer'
                id=''
                name=''
                onChange={(e)=>{setLength(e.target.value); generaterpassword()}}
                />
                <label>length:{length}</label>
                {/* for numbers */}
                <input
                type='checkbox'
                defaultValue={numbersAllowed}
                className='cursor-pointer'
                id=''
                name=''
                onChange={(e)=>{setNumbersAllowed(e.target.checked)}}
                />
                <label>Number</label>
                {/* for characters */}
                <input
                type='checkbox'
                defaultValue={charactersAllowed}
                className='cursor-pointer'
                id=''
                name=''
                onChange={(e)=>{setCharactersAllowed(e.target.checked
            )}}
                />
                <label>Characters</label>
            </div>


        </div>
    )
}

export default PasswordGenerator
