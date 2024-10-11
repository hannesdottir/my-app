interface SendResetPasswordResult {
 error?:any,
 success:boolean
}

export async function sendResetPasswordRequest(
  cValue:string,
  newPassword:string,
  confirmPassword:string
):Promise<SendResetPasswordResult> {
  try {
    //const endpoint = "https://jsonplaceholder.typicode.com/posts/123456789"; //Mock bad request
    const endpoint = "https://jsonplaceholder.typicode.com/posts"; // Mock 200 endpoint
    const dataToSend = {
      body: `Reset password for user with cValue: ${cValue}`, // Replace with data
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      // Parse the response into a JavaScript object
      const createdPost = await response.json();
      console.log("Lyckades ändra lösenordet (på mock API)");
      console.log("Newly created post object:", createdPost);
    } else {
      console.error("Någonting gick fel (på mock API)");
      const errorData = await response.json();
      console.error(errorData.message);
      return {error:errorData,success:false};
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return {success:true};
  
}


