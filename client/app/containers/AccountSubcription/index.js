import React from 'react'
import '../../styles/core/_subscription-page.scss'
import { connect } from 'react-redux'
import actions from '../../actions'

class SubscriptionPage extends React.PureComponent {
    // componentDidMount() {
    //     // this.props.fetchProfile();
    // }
    render() {
        const { user } = this.props
        console.log(user.subscription)
        return (
            <div className="subscription-page">
                <h2 className="subscription-header">
                    Choose a Subscription Plan
                </h2>
                <div className="subscription-options">
                    <div className="subscription-option free">
                        <h3>Free Subscription</h3>
                        <br />
                        <button>Free</button>
                        <br />
                        <br />
                        <br />
                        {user.subscription === 'Free' && (
                            <p className="currnt-plan">Current Plan</p>
                        )}
                    </div>
                    <div className="subscription-option gold">
                        <h3>Gold Subscription</h3>
                        <p>$10 / month</p>
                        <br />
                        {user.subscription === 'Gold' ? (
                            <p className="currnt-plan">Current Plan</p>
                        ) : (
                            <button>Buy Now</button>
                        )}
                    </div>
                    <div className="subscription-option platinum">
                        <h3>Platinum Subscription</h3>
                        <p>$20 / month</p>
                        <br />
                        {user.subscription === 'Platinum' ? (
                            <p className="currnt-plan">Current Plan</p>
                        ) : (
                            <button>Buy Now</button>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

// export default SubscriptionPage
const mapStateToProps = (state) => {
    return {
        user: state.account.user,
        resetFormData: state.resetPassword.resetFormData,
        formErrors: state.resetPassword.formErrors,
    }
}
export default connect(mapStateToProps, actions)(SubscriptionPage)
