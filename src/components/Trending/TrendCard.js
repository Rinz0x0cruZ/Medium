import React from 'react';

const TrendCard = (props) => {
  const { profilePic, username, context, title, date, read, star } = props;

  return (
    <div className="trend-card">
      <div className="tui">
        <img className="tpp" src={profilePic} alt={`${username}'s Profile`} />
        <p className="tu">{username}</p>
        <p className="tcon">{context}</p>
      </div>
      <h3 className="tct">{title}</h3>
      <div className="tcc">
        <p className="tcd">{date}</p>
        <p className="tr">{read}</p>
        <img src={star} />
      </div>
    </div>
  );
};

export default TrendCard;
