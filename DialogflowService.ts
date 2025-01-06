export const sendMessageToDialogflow = async (message: string, context?: string) => {
    const apiKey = import.meta.env.VITE_DIALOGFLOW_API_KEY;
    const sessionId = 'user-session-id'; // Unique session ID for each user
    const projectId = 'your-dialogflow-project-id'; // Replace with your Dialogflow project ID
  
    const url = `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent`;
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        queryInput: {
          text: {
            text: message,
            languageCode: 'en-US',
          },
        },
        queryParams: {
          contexts: context ? [{ name: context }] : [],
        },
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to send message to Dialogflow');
    }
  
    const data = await response.json();
    return data.queryResult;
  };
