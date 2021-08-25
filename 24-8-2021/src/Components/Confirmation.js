import React from 'react'

export const Confirmation = ({ values }) => {
    //console.log('values =>', values);
    return (
        <div>
            <table border="1">
                <tr>
                    <td colSpan='2'><label>Firstname:={values.firstname}</label></td>
                </tr>
                <tr>
                    <td colSpan="2"><label>Lastname:={values.lastname}</label></td>
                </tr>
                <tr>
                    <td colSpan="2"><label>email:={values.email}</label><br /></td>
                </tr>
                <tr>
                    <td colSpan="2"><label>Hobbies:={values.hobbies}</label><br /></td>
                </tr>
                <tr>
                    <td colSpan="2"><label>Qualification:={values.qualification}</label></td>
                </tr>
            </table>
        </div>
    )
}
export default Confirmation
