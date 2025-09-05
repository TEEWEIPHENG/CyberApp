import React, { useEffect, useState } from 'react';
import { GetFriendsApi, GetPendingFriendRequestApi, RespondFriendRequestApi, SendFriendRequestApi } from '../../api/friend';
import '../styles/chat.css';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaUserFriends, FaTimes, FaPaperclip } from 'react-icons/fa';
import { FaCheck, FaPenClip } from 'react-icons/fa6';

function ChatPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isSubmitFriendRequestError, setIsSubmitFriendRequestError] = useState(false);

    const [showPendingRequests, setShowPendingRequests] = useState(false);

    const [friendRequestMobile, setFriendRequestMobile] = useState("");
    const [friendList, setFriendList] = useState([]);
    const [friendRequestList, setFriendRequestList] = useState([]);
    const [respondedFriendRequests, setRespondedFriendRequests] = useState(false);

    const [currentChat, setCurrentChat] = useState({
        receiver: null,
        chatHistory: []
    });

    const [messageBody, setMessageBody] = useState("");

    useEffect(() => {
        const getFriendList = async () => {
            const data = await GetFriendsApi();
            setFriendList(data.friends || []);
        };

        const getFriendRequests = async () => {
            const data = await GetPendingFriendRequestApi({ status: 'pending' });
            setFriendRequestList(data.pendingRequests || []);
        }
        getFriendList();
        getFriendRequests();
    }, [respondedFriendRequests]);

    const handleAcceptFriendRequest = async (requestId) => {
        if (!requestId) return;
        const result = await RespondFriendRequestApi({ requestId, action: 'Accepted' });
        if (result) {
            setRespondedFriendRequests(!respondedFriendRequests);
        }
    }
    const handleDeclineFriendRequest = async (requestId) => {
        if (!requestId) return;
        const result = await RespondFriendRequestApi({ requestId, action: 'Rejected' });
        if (result) {
            setRespondedFriendRequests(!respondedFriendRequests);
        }
    }

    const handleSubmitFriendRequest = async () => {
        setIsSubmitting(true);
        setIsSubmitFriendRequestError(false);
        console.log(friendRequestMobile);
        if (!friendRequestMobile) {
            setIsSubmitting(false);
            setIsSubmitFriendRequestError(true);
            setTimeout(() => {
                setIsSubmitFriendRequestError(false);
            }, 4000);
            return;
        }
        const result = await SendFriendRequestApi({ mobileNo: friendRequestMobile });
        if (result && result.success) {
            setIsSent(true);
            setTimeout(() => {
                setIsSent(false);
            }, 2000);
        } else {
            setIsSubmitFriendRequestError(true);
            setTimeout(() => {
                setIsSubmitFriendRequestError(false);
            }, 4000);
        }
        setTimeout(() => {
            setIsSubmitting(false);
            setFriendRequestMobile("");
        }, 1000);
    }

    const handleChangeConversation = async (payload) => {
        //check if have conversation.
        //set current chat
        setCurrentChat({
            receiver: payload.displayName,
            chatHistory: [],
        })
    }

    const handleSendMessage = async () => {
        alert(`Send message to ${currentChat.receiver} \n${messageBody}`);
    }
    return (
        <>
            <div className="friend-requests-container">
                <div className='friend-request-input-container'>
                    <label className='friend-request-label'>Send Friend Request</label>
                    <div className='friend-request-input-box'>
                        <input className='friend-request-input' type="text" placeholder="Mobile number" value={friendRequestMobile} onChange={(e) => setFriendRequestMobile(e.target.value)} />
                        <button className='submit-friend-request-btn' onClick={() => handleSubmitFriendRequest()} disabled={isSubmitting}>
                            {isSubmitting
                                ? <FaSpinner />
                                : isSent ? <FaCheckCircle /> : <><FaPaperPlane /> Send</>
                            }</button>
                    </div>
                    <div className='friend-request-error'>
                        {
                            !isSubmitting && isSubmitFriendRequestError && <div>Error sending friend request. Please try again.</div>
                        }
                    </div>
                </div>

                <div className='pending-friend-requests-container'>
                    <button className="show-pending-requests-btn" onClick={() => setShowPendingRequests(!showPendingRequests)}>
                        <FaUserFriends /> Friend Requests ( {friendRequestList.length} )
                    </button>
                    <div className='pending-friend-requests-panel'>
                        {showPendingRequests &&
                            Array.isArray(friendRequestList) && friendRequestList.map((friend, index) => (
                                <div key={index} className="pending-friend-request">
                                    <span>{friend.requesterName}</span>
                                    <div>
                                        <button className='accept-friend-request-btn' onClick={() => handleAcceptFriendRequest(friend.requestId)}><FaCheck /></button>
                                        <button className='decline-friend-request-btn' onClick={() => handleDeclineFriendRequest(friend.requestId)}><FaTimes /></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='chat-container'>
                <div className='friend-list-container'>
                    <div className='friend-list-header'>
                        <strong>Friends</strong>
                    </div>
                    <div>
                        {
                            Array.isArray(friendList) && friendList.map((friend, index) => (
                                <div className='friend-list-item' key={index} onClick={() => handleChangeConversation(friend)}>
                                    <span>{friend.displayName}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='conversation-container'>
                    <div className='conversation-header'>
                        <strong>{currentChat.receiver ?? "Chat"}</strong>
                    </div>
                    <div className='conversation-chat-container'>
                        {
                            currentChat.chatHistory.length === 0 && currentChat.receiver === ""
                                ? <div className='no-chat-placeholder'><FaPenClip size={50} /><span>Select a friend to start chatting</span></div>
                                : currentChat.chatHistory.map((msg, idx) => (
                                    <div key={idx} className={`message-container ${msg.sender === 'self' ? 'sender-message' : 'receiver-message'}`}>
                                        {msg.content}
                                    </div>
                                ))
                        }
                    </div>
                    <div className='message-sender-toolbar'>
                        {
                            currentChat.receiver && currentChat.receiver !== ""
                            && <>
                                <label className='message-sender-attachment-label' htmlFor="attachment-upload"><FaPaperclip /></label>
                                <input id="attachment-upload" type="file" className='message-sender-attachment'/>
                                <input type="text" placeholder="Type a message..." className='message-sender-input' value={messageBody} onChange={(e)=> setMessageBody(e.target.value)}/>
                                <button className='send-message-btn' onClick={()=> handleSendMessage()}>Send</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatPage;