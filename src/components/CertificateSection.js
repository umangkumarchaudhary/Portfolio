import React, { useState } from 'react';
import Modal from 'react-modal';
import './CertificateSection.css'; // Add your styles


// Sample certificate data
const certificates = [
  {
    id: 1,
    title: 'React Certification',
    issuer: 'React University',
    date: '2022-05-15',
    thumbnail: 'data:image/jpeg;base64,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',
    icon: 'url_to_custom_icon',
    achievements: ['Top Performer'],
    testimonials: 'Received positive feedback for outstanding React skills.',
    platformLink: 'https://www.reactuniversity.com/cert/react123',
  },
  // Add more certificates
];

// ... (previous imports)

const CertificateSection = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [filterIssuer, setFilterIssuer] = useState('');
  
    const openModal = (certificate) => {
      setSelectedCertificate(certificate);
    };
  
    const closeModal = () => {
      setSelectedCertificate(null);
    };
  
    const filteredCertificates = certificates.filter(
      (certificate) =>
        certificate.issuer.toLowerCase().includes(filterIssuer.toLowerCase())
    );
  
    return (
      <div className="certificate-section">
        <h2 className="certificate-section-title">Certificates</h2>
  
        {/* Filter Input */}
        <input
          type="text"
          placeholder="Filter by Issuer"
          value={filterIssuer}
          onChange={(e) => setFilterIssuer(e.target.value)}
        />
  
        {/* Certificates Grid */}
        <div className="certificate-grid">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="certificate-card"
              onClick={() => openModal(certificate)}
            >
              <img
                src={certificate.thumbnail}
                alt={certificate.title}
                className="certificate-thumbnail"
              />
              <h3 className="certificate-title">{certificate.title}</h3>
              <button
                className="view-more-button"
                onClick={() => openModal(certificate)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
  
        {/* Modal for detailed certificate view */}
        <Modal
          isOpen={selectedCertificate !== null}
          onRequestClose={closeModal}
          className="certificate-modal"
          overlayClassName="certificate-overlay"
        >
          {selectedCertificate && (
            <>
              <img
                src={selectedCertificate.thumbnail}
                alt={selectedCertificate.title}
                className="modal-thumbnail"
              />
              <h2>{selectedCertificate.title}</h2>
              <p>Issuer: {selectedCertificate.issuer}</p>
              <p>Date of Completion: {selectedCertificate.date}</p>
              <img
                src={selectedCertificate.icon}
                alt={`${selectedCertificate.title} Icon`}
                className="certificate-icon"
              />
              <p>Achievements: {selectedCertificate.achievements.join(', ')}</p>
              <p>Testimonials: {selectedCertificate.testimonials}</p>
              <a
                href={selectedCertificate.platformLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify on Platform
              </a>
              <button onClick={closeModal}>Close</button>
            </>
          )}
        </Modal>
      </div>
    );
  };
  
  export default CertificateSection;
  