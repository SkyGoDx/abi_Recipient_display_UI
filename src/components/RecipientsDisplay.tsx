import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md';
import * as avtar from '../assets/user.jpg';
import { RootState } from '../store/store'; // Ensure you have RootState type defined in your store

// Random context data for each recipient (mocked)
const getEmailContext = (recipient: string) => ({
  sender: `${recipient.split('@')[0]}@mail.com`,
  subject: `Regarding project update for ${recipient.split('@')[0]}`,
  timestamp: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, '0')} - ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
});

const RecipientsDisplay: React.FC = () => {
  // Use the RootState to select recipients from the Redux store
  const recipients = useSelector((state: RootState) => state.recipients.recipients);

  const [isExpanded, setIsExpanded] = useState(false);

  const RECIPIENTS_LIMIT = 2;

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex flex-col space-y-4">
        {/* Display each recipient in a card-like structure */}
        {(isExpanded ? recipients : recipients.slice(0, RECIPIENTS_LIMIT)).map(
          (recipient, index) => {
            const context = getEmailContext(recipient);
            return (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon and Recipient Info */}
                <img className="w-16 h-16 rounded-full" src={
                  avtar.default
                } alt="User Avatar" />
                <div className="flex flex-col space-y-1 ml-4">
                  {/* Recipient Email */}
                  <span className="text-sm font-medium text-gray-700">{recipient}</span>
                  {/* Context Info */}
                  <span className="text-xs text-gray-500">
                    <strong>From:</strong> {context.sender}
                  </span>
                  <span className="text-xs text-gray-500">
                    <strong>Subject:</strong> {context.subject}
                  </span>
                  <span className="text-xs text-gray-400">
                    <strong>Time:</strong> {context.timestamp}
                  </span>
                </div>
              </div>
            );
          }
        )}

        {/* Collapsed / Expanded State Toggle */}
        {recipients.length > RECIPIENTS_LIMIT && (
          <button
            className="flex items-center justify-center mt-4 p-2 bg-blue-500 text-white rounded-full focus:outline-none hover:bg-blue-600 transition"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? (
              <span className="flex items-center">
                <MdOutlineExpandLess className="mr-1" />
                Show Less
              </span>
            ) : (
              <span className="flex items-center">
                <MdOutlineExpandMore className="mr-1" />
                Show More
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipientsDisplay;
