// OpenAI API integration placeholder
// Connect your API key here when ready to power the chatbot

export async function chat(message) {
    // Placeholder — returns a static response
    // Replace with actual OpenAI API call:
    //
    // const res = await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: message }],
    //   }),
    // });
    // const data = await res.json();
    // return data.choices[0].message.content;

    return "This is a demo response. Connect OpenAI API for real AI chat!";
}
