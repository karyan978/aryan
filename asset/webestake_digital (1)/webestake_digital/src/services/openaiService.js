import OpenAI from 'openai';

/**
 * Initializes the OpenAI client with the API key from environment variables.
 * @returns {OpenAI} Configured OpenAI client instance.
 */
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Required for client-side usage in React
});

/**
 * Generates a chat completion response based on user input.
 * @param {string} userMessage - The user's input message.
 * @returns {Promise<string>} The assistant's response.
 */
export async function getChatCompletion(userMessage) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: `You are Webestake AI Assistant, a helpful chatbot for Webestake Digital Solutions company based in Bihar Sharif, Bihar. 
          
          Company Information:
          - Location: Mogal Kuan, Bihar Sharif, Bihar, India
          - Services: App Development, Web Development, Digital Marketing, SEO, Graphic Design, IT Services
          - Mission: To empower businesses with expert digital solutions
          - Target: Local & global businesses looking for digital transformation
          
          Guidelines:
          - Be professional and helpful
          - Provide information about our services
          - Encourage users to book consultations
          - Be brief but informative
          - If asked about pricing, suggest contacting for custom quotes
          - Always maintain a friendly, professional tone` 
        },
        { role: 'user', content: userMessage },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error in chat completion:', error);
    if (error.code === 'invalid_api_key') {
      return "I'm currently experiencing connectivity issues. Please contact us directly at +91 98765 43210 or hello@webestake.com for immediate assistance.";
    }
    return "I'm temporarily unavailable. Please try again in a moment or contact our team directly for immediate help.";
  }
}

/**
 * Streams a chat completion response chunk by chunk.
 * @param {string} userMessage - The user's input message.
 * @param {Function} onChunk - Callback to handle each streamed chunk.
 */
export async function getStreamingChatCompletion(userMessage, onChunk) {
  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: `You are Webestake AI Assistant, a helpful chatbot for Webestake Digital Solutions company based in Bihar Sharif, Bihar. 
          
          Company Information:
          - Location: Mogal Kuan, Bihar Sharif, Bihar, India
          - Services: App Development, Web Development, Digital Marketing, SEO, Graphic Design, IT Services
          - Mission: To empower businesses with expert digital solutions
          - Target: Local & global businesses looking for digital transformation
          
          Guidelines:
          - Be professional and helpful
          - Provide information about our services
          - Encourage users to book consultations
          - Be brief but informative
          - If asked about pricing, suggest contacting for custom quotes
          - Always maintain a friendly, professional tone` 
        },
        { role: 'user', content: userMessage },
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 200,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        onChunk(content);
      }
    }
  } catch (error) {
    console.error('Error in streaming chat completion:', error);
    onChunk("I'm temporarily unavailable. Please try again in a moment or contact our team directly for immediate help.");
  }
}

export default openai;