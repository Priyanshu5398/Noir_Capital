import React, { useState } from 'react';
import './UserDashboard.css';
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'NOIR Capital',
    roundsCompleted: 2,
    totalRounds: 4,
    progress: 50,
    status: 'In Progress',
    colorClass: 'frontend',
  },
  {
    title: 'Backend Engineer',
    company: 'NOIR Capital',
    roundsCompleted: 4,
    totalRounds: 4,
    progress: 100,
    status: 'Accepted',
    colorClass: 'backend',
  },
  {
    title: 'UI/UX Designer',
    company: 'NOIR Capital',
    roundsCompleted: 4,
    totalRounds: 4,
    progress: 100,
    status: 'Rejected',
    colorClass: 'uiux',
  },
];

const statusConfig = {
  'Accepted': {
    badgeClass: 'accepted',
    icon: <FaCheckCircle />,
    label: 'Accepted',
  },
  'Rejected': {
    badgeClass: 'rejected',
    icon: <FaTimesCircle />,
    label: 'Rejected',
  },
  'In Progress': {
    badgeClass: 'inprogress',
    icon: <FaClock />,
    label: 'In Progress',
  },
};


const UserDashboard = () => {
  const [openJob, setOpenJob] = useState(null);

  const handleCardClick = (job) => {
    setOpenJob(job);
  };

  const closeModal = () => setOpenJob(null);

  return (
    <div className="ud-root">
      <div className="ud-title">Job Application Status</div>
      <div className="ud-cards">
        {jobs.map((job, idx) => {
          const status = statusConfig[job.status];
          return (
            <div
              className="ud-card"
              key={idx}
              style={{ cursor: 'pointer' }}
              onClick={() => handleCardClick(job)}
              tabIndex={0}
              role="button"
              aria-label={`Open details for ${job.title}`}
            >
              <div className={`ud-card-title ${job.colorClass}`}>{job.title}</div>
              <div className="ud-card-company">{job.company}</div>
              <div className="ud-card-rounds">
                Rounds Completed: {job.roundsCompleted} / {job.totalRounds}
              </div>
              <div className="ud-progress-bar">
                <div
                  className="ud-progress-bar-inner"
                  style={{
                    width: `${job.progress}%`,
                    background:
                      job.status === 'Accepted'
                        ? '#43ea7a'
                        : job.status === 'Rejected'
                        ? '#ff5252'
                        : '#ffe082',
                  }}
                ></div>
              </div>
              <div className="ud-card-progress">{job.progress}% completed</div>
              <div className={`ud-status-badge ${status.badgeClass}`}>{status.icon}{status.label}</div>
            </div>
          );
        })}
      </div>

      {openJob && (
        <div className="ud-modal-overlay" onClick={closeModal}>
          <div className="ud-modal" onClick={e => e.stopPropagation()}>
            <button className="ud-modal-close" onClick={closeModal} aria-label="Close">&times;</button>
            <h2 style={{ marginBottom: '1rem' }}>{openJob.title}</h2>
            <div><strong>Company:</strong> {openJob.company}</div>
            <div><strong>Rounds Completed:</strong> {openJob.roundsCompleted} / {openJob.totalRounds}</div>
            <div><strong>Status:</strong> {statusConfig[openJob.status].label}</div>
            <div style={{ marginTop: '1rem' }}>
              <div className="ud-progress-bar">
                <div
                  className="ud-progress-bar-inner"
                  style={{
                    width: `${openJob.progress}%`,
                    background:
                      openJob.status === 'Accepted'
                        ? '#43ea7a'
                        : openJob.status === 'Rejected'
                        ? '#ff5252'
                        : '#ffe082',
                  }}
                ></div>
              </div>
              <div className="ud-card-progress">{openJob.progress}% completed</div>
            </div>
            <div className={`ud-status-badge ${statusConfig[openJob.status].badgeClass}`} style={{ marginTop: '1rem' }}>
              {statusConfig[openJob.status].icon}
              {statusConfig[openJob.status].label}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
