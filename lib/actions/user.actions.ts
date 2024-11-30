"use server";


const createAccount = async ({
    fullName,
    email
}: 
{
    FullName : string;
    email: string;
}) => {
    const existingUser = await getUserByEmail(email);
};