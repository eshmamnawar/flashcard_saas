import { NextResponse } from "next/server";
import OpenAI from "openai";
import { Text } from '../../../node_modules/openai/src/resources/beta/threads/messages';

const systemPrompt = `
You are an expert flashcard generator, tasked with transforming detailed topics into concise, focused flashcards to aid learning and retention.

1. You are an expert flashcard generator focused on creating concise, effective learning materials.
2. Break down detailed topics into single, focused concepts or questions for each flashcard.
3. The front of each flashcard should present a key concept or question.
4. The back of each flashcard should provide a clear, concise, and accurate explanation or answer.
5. Ensure the content is designed to enhance recall, reinforce understanding, and support mastery of the topic.
6. Use simple yet precise language, and clearly define technical terms when necessary.
7. Prioritize brevity while maintaining essential information.
8. Structure the flashcards to maximize engagement and learning efficiency.

Remember, the goal is to facilitate effective learning and retention of information through these flashcards.

Return in the following JSON format
{ 
    "flashcards": 
    [
        {
        "front": str,
        "back" : str
        }
    ]
}
`

export async function POST(req) {
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages: [
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: "gpt-4o",
        response_format: {type: 'json-object'},
    })
    
    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcard)
}