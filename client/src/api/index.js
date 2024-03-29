import axios from 'axios'

const API = axios.create({ baseURL: 'https://class-next.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

//---------------Authentication axios APIs------------//
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

//---------------Interview Analysis axios APIs------------//
export const joinZoomCall = (formData) => API.post('/analysis/interviewAnalysis', formData)
export const getAnalysis = (formData) => API.post('/analysis/interviewAnalysisResult', formData)
export const stopAnalysis = (connectionId) => API.get(`/analysis/stopInterviewAnalysis/${connectionId}`)

//---------------Interaction Analysis axios APIs------------//
export const sendVideoData = (formData) => API.post('/analysis/pitchAnalysis/sendVideoData', formData, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
export const getComparisonData = (conversationId1, conversationId2) => API.get(`/analysis/pitchAnalysis/getComparisonData/${conversationId1}/${conversationId2}`)
export const getConversationList = () => API.get('/analysis/pitchAnalysis/getConversationList');
export const fetchAnalysisResult = (conversationId) => API.get(`/analysis/pitchAnalysis/fetchAnalysisResult/${conversationId}`);

//for video calling
export const joincall = (roomId) => API.get(`/video-call/${roomId}`)

export const getChatResponse = () => API.post('/notifications/response')


export const sendSummary = (summary) => {
    console.log("summary received", summary)
    return API.post('/notifications/sendSummary', summary);
}
export const appendChat = (chat) => {
    console.log("chat sent", chat)
    return API.post('/notifications/appendChat', chat);
}

// export const startChat = (roomId) => {
//     return API.post(`/chat-session/${roomId}`);
// }
// export const getChat = (roomId) => {
//     return API.get(`/chat-session/${roomId}`);
// }