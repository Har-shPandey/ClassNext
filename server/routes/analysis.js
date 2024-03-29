import express from 'express';

import { startInterviewAnalysis, InterviewAnalysisResult, stopInterviewAnalysis } from '../controllers/api/symbl/InterviewAnalysis/zoomApi.js'
import { sendVideoData } from '../controllers/api/symbl/PitchAnalysis/asyncApi.js'
import { getDataToCompare, getConversationList, fetchAnanlysisData } from '../controllers/analysisData.js'
import auth from '../middleware/auth.js';
import { textAnalysis } from '../controllers/api/symbl/ConversationApi/apiCalls.js';

const router = express.Router();


router.get('/stopInterviewAnalysis/:connectionId', auth, stopInterviewAnalysis)
router.post('/interviewAnalysisResult', auth, InterviewAnalysisResult)
router.post('/interviewAnalysis', auth, startInterviewAnalysis);

//------------Interaction Analysis routes------------//
router.post('/pitchAnalysis/sendVideoData', auth, sendVideoData);
router.get('/pitchAnalysis/getConversationList/', auth, getConversationList);

//------------Dashboard routes------------//
router.get('/pitchAnalysis/getComparisonData/:conversationId1/:conversationId2', auth, getDataToCompare)
router.get('/pitchAnalysis/fetchAnalysisResult/:conversationId', auth, fetchAnanlysisData)

router.post('/chat-session/report', auth, textAnalysis)


export default router;