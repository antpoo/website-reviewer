"use client";

import { useForm } from "react-hook-form";

export default function Article() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="h-screen justify-center items-center flex flex-col">
            <form className="flex flex-col space-y-10 w-screen items-center"
                onSubmit={handleSubmit((data) => {
                    console.log(data);
            })}>
                <input className="border-2 w-1/2 p-2 border-amber-500 dark:border-teal-300 rounded-md bg-gray-200 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-teal-300"
                    {...register("firstName")} placeholder="First Name" 
                />
                <input className="border-2 w-1/2 p-2 border-amber-500 dark:border-teal-300 rounded-md bg-gray-200 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-teal-300"
                    {...register("lastName")} placeholder="Last Name" 
                />
                <input type="submit" />
            </form>
        </div>
    );
};