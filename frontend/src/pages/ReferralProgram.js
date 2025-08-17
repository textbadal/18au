import React, { useState } from "react";
import "./ReferralProgram.css";

const ReferralProgram = () => {
  const referralLink = "https://forms.gle/your-google-form-link"; // Replace with your Google Form link
  const [earnings, setEarnings] = useState(0); // Track user's earnings
  const [copied, setCopied] = useState(false); // Track if link is copied

  // Sample leaderboard data
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: "Swati Sinha", referrals: 45, earnings: 2250 },
    { rank: 2, name: "Vivek Kumar", referrals: 38, earnings: 1900 },
    { rank: 3, name: "Smitha Reddy", referrals: 30, earnings: 1500 },
    { rank: 4, name: "Vaibhav Prince", referrals: 25, earnings: 1250 },
    { rank: 5, name: "Shruti Mishra", referrals: 20, earnings: 1000 },
  ]);

  // Copy referral link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  // Simulate earning ₹50 per referral
  const handleReferral = () => {
    setEarnings(earnings + 50);
    alert("🎉 You've earned ₹50 for this referral!");
  };

  return (
    <div className="referral-program">
      {/* Header Section */}
      <header className="header">
        <h1>🚀 Join Our Referral Program</h1>
        <p>
          Invite your friends and earn <strong>₹50 for every successful referral</strong>.
          Start sharing your link today and climb the leaderboard!
        </p>
      </header>

      {/* Steps Section */}
      <section className="steps">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <span className="step-icon">1</span>
            <p>Share your unique referral link with friends.</p>
          </div>
          <div className="step">
            <span className="step-icon">2</span>
            <p>They fill out the Google Form using your link.</p>
          </div>
          <div className="step">
            <span className="step-icon">3</span>
            <p>Earn ₹50 for every successful referral!</p>
          </div>
        </div>
      </section>

      {/* Referral Link Section */}
      <section className="referral-link">
        <h2>Your Referral Link</h2>
        <p>Copy and share your link to start earning:</p>
        <div className="link-container">
          <input type="text" value={referralLink} readOnly />
          <button onClick={copyToClipboard} className={copied ? "copied" : ""}>
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
        <div className="social-share">
          <p>Share on:</p>
          <button
            className="whatsapp"
            onClick={() =>
              window.open(
                `https://wa.me/?text=Join+this+amazing+program+and+earn+rewards!+Fill+out+the+form+using+my+referral+link:+${referralLink}`,
                "_blank"
              )
            }
          >
            WhatsApp
          </button>
          <button
            className="facebook"
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${referralLink}`,
                "_blank"
              )
            }
          >
            Facebook
          </button>
          <button
            className="twitter"
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?url=${referralLink}&text=Join+this+amazing+program+and+earn+rewards!+Fill+out+the+form+using+my+referral+link.`,
                "_blank"
              )
            }
          >
            Twitter
          </button>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="earnings">
        <h2>Your Earnings</h2>
        <p className="earnings-amount">₹{earnings}</p>
        <button onClick={handleReferral} className="earn-button">
          Simulate a Referral (Earn ₹50)
        </button>
      </section>

      {/* Leaderboard Section */}
      <section className="leaderboard">
        <h2>Top Referrers</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Referrals</th>
              <th>Earnings</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((referrer) => (
              <tr key={referrer.rank}>
                <td>{referrer.rank}</td>
                <td>{referrer.name}</td>
                <td>{referrer.referrals}</td>
                <td>₹{referrer.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    
    </div>
  );
};

export default ReferralProgram;