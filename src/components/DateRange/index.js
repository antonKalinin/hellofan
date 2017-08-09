import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import {DayPickerRangeController} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
import styles from './DateRange.css';

const START_DATE = 'startDate';

class DateRange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
            startDate: moment(),
            endDate: moment().add(14, 'days'),
            focusedInput: START_DATE,
        };
    }

    componentDidMount() {
    }

    onDatesChange = ({startDate, endDate}) => {
        this.setState({startDate, endDate});
    }

    onFocusChange = (focusedInput) => {
        this.setState({
            focusedInput: !focusedInput ? START_DATE : focusedInput,
        });
    }

    onOkClick = () => {
        this.setState({isExpanded: false});
    }

    props: {

    }

    render() {
        const {isExpanded, startDate, endDate, focusedInput} = this.state;

        return (
            <div
                className={`${styles.root} ${isExpanded ? styles.root_expanded : ''}`}
            >
                <div
                    role='button'
                    className={styles.pickedDates}
                    onClick={() => { this.setState({isExpanded: !isExpanded}) }}
                >
                    {`${startDate.format('DD/MM/YY')} - ${endDate.format('DD/MM/YY')}`}
                </div>
                <DayPickerRangeController
                    numberOfMonths={1}
                    startDate={startDate}
                    endDate={endDate}
                    focusedInput={focusedInput}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                />
                <Button basic color='teal' size='big' onClick={this.onOkClick}>Ok</Button>
            </div>
        );
    }
}

export default connect(state => ({
    isMobile: state.ui.isMobile,
}))(DateRange);
