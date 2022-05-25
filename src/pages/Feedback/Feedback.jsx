import React from 'react';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Feedback = () => {
    return (
        <div>
            <Header />
            <FeedbackForm />
            <Footer />
        </div>
    );
};

export default Feedback;