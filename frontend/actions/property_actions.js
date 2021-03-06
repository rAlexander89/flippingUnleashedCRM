import * as PropertyAPIUtil from '../utils/api/property_api_util'

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES'
export const RECEIVE_UNCONTACTED_PROPERTIES = 'RECEIVE_UNCONTACTED_PROPERTIES'
export const RECEIVE_CSV = 'RECEIVE_CSV'
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY'
export const REMOVE_PROPERTY = "REMOVE_PROPERTY"
export const RECEIVE_PROPERTY_ERRORS = "RECEIVE_PROPERTY_ERRORS"

export const receiveProperties = properties => {
    return{
        type: RECEIVE_PROPERTIES,
        properties
    }
}

export const receiveUncontactedProperties = properties => {
    return{
        type: RECEIVE_UNCONTACTED_PROPERTIES,
        properties
    }
}


export const receiveProperty = property => {
    return{
        type: RECEIVE_PROPERTY,
        property
    }
}

export const receiveCSV = csv => {
    return{
        type: RECEIVE_CSV,
        csv
    }
}

export const removeProperty = propertyId => {
    return{
        type: REMOVE_PROPERTY,
        propertyId
    }
}

export const receivePropertyErrors = errors => {
    return{
        type: RECEIVE_PROPERTY_ERRORS,
        errors
    }
}

export const fetchProperties = () => dispatch => {
    return PropertyAPIUtil.fetchProperties()
        .then(properties => dispatch(receiveProperties(properties)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}


export const fetchProperty = propertyId => dispatch => {
    return PropertyAPIUtil.fetchProperty(propertyId)
        .then(property => dispatch(receiveProperty(property))),
            error => dispatch(receivePropertyErrors(error.responseJSON))
}

export const createProperty = property => dispatch => {
    return PropertyAPIUtil.createProperty(property)
        .then(property => dispatch(receiveProperty(property)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}

export const importProperties = csv => dispatch => {
    return PropertyAPIUtil.importProperties(csv)
        .then(csv => dispatch(receiveCSV(csv)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}

export const updateProperty = property => dispatch => {
    return PropertyAPIUtil.updateProperty(property)
        .then(property => dispatch(receiveProperty(property)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}

export const deleteProperty = propertyId => dispatch => {
    return PropertyAPIUtil.deleteProperty(propertyId)
        .then(() => dispatch(removeProperty(propertyId)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}

