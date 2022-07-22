import React from "react";
import "./Spinner.scss";
import ChefHatIcon from "mdi-react/ChefHatIcon";
import PropTypes from 'prop-types';


const getSpinnerAttributes = ({spinnerValue}) => ({
    className: spinnerValue ? 'spinner' : 'hide-spinner'
});

const Spinner = ({spinnerValue}) => {
    return (
        <div id="spinner" {...getSpinnerAttributes({spinnerValue})}>
            <div className="spinner-wrapper">
                <span className="icon-spinner">
                    <ChefHatIcon className="icon-spinner" size="50"/>
                </span>
            </div>
        </div>
    );
};

getSpinnerAttributes.propTypes = {
    spinnerValue: PropTypes.bool
}

export default Spinner;