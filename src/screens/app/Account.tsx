import { StyleSheet, Text, View, TextInput, SafeAreaView, Keyboard, Button } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Color, Constants } from '../../common'
import { RNInput, RNButton, RNKeyboard } from '../../components'
import { useDispatch } from 'react-redux'
import { Languages } from '../../common/Languages'
import { withFormik, Form, Field, Formik } from 'formik'
import * as yup from 'yup'

const Account = (props : any) => {
  console.log('Account');
  
  const dispatch = useDispatch();
  const [validateOldPW,setValidateOldPW] = useState(true);
  const [validateNewPW,setValidateNewPW] = useState(true);
  const [validateReNewPW,setValidateReNewPW] = useState(true);
  const [error,setError] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassWord] = useState('');
  const [reNewPassword,setReNewPassword] = useState('');
  const oldPassWordRef = useRef();
  const newPassWordRef = useRef();
  const reNewPasswordRef = useRef();
  


  

  const handleOnConfirmPress = () => {
    Keyboard.dismiss();
    
  }
  
  return (
    <SafeAreaView style={styles.container}>
     

      <Formik
        validationSchema={validationSchema}
        initialValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched  }) => (
          <RNKeyboard>
            <RNInput
                name={'oldPassword'}
                value={values.oldPassword}
                // ref={oldPassWordRef}
                // autoFocus
                placeholder={'Mật khẩu cũ'}
                style={styles.input}
                wrapStyleInput={{marginTop: 20}}
                secureTextEntry      
                emptyMessage={Languages.MESSAGE_EMPTY}
                onChangeText={handleChange('oldPassword')}
                
                // error={validateOldPW && error}
              >
              <Text style={styles.title}>{'Mật khẩu cũ'}</Text>
            </RNInput>
            {
              errors.oldPassword && touched.oldPassword && <Text style={styles.textError}>{errors.oldPassword}</Text>
            }
        <RNInput
          name={'newPassword'}
          value={values.newPassword}
          // ref={newPassWordRef}
          placeholder={'Mật khẩu mới'}
          style={styles.input}
          wrapStyleInput={{marginVertical: 10}}
          secureTextEntry
          emptyMessage={Languages.MESSAGE_EMPTY}
          onChangeText={handleChange('newPassword')}
          // error={validateNewPW && error}
        >
          <Text style={styles.title}>{'Mật khẩu mới'}</Text>
        </RNInput>
        {
          errors.newPassword && touched.newPassword && <Text style={styles.textError}>{errors.newPassword}</Text>
        }
        <RNInput
          name={'confirmPassword'}
          value={values.confirmPassword}
          // ref={reNewPasswordRef}
          placeholder={'Nhập lại mật khẩu'}
          style={styles.input}
          secureTextEntry
          // emptyMessage={Languages.MESSAGE_EMPTY}
          onChangeText={handleChange('confirmPassword')}
          // error={validateReNewPW && error}
        >
          <Text style={styles.title}>{'Nhập lại mật khẩu'}</Text>
        </RNInput>
        {
          errors.confirmPassword && touched.confirmPassword && <Text style={styles.textError}>{errors.newPassword}</Text>
        }
        <RNButton activeOpacity={0.8} onPress={handleSubmit} disabled={!isValid}>
          <Text style={styles.textButton}>{'Xác nhận'}</Text>
        </RNButton>
          </RNKeyboard>
        )}
      </Formik>
    </SafeAreaView>
  )
}

const validationSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(4, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is Required'),
  password: yup
    .string()
    .min(4, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
    confirmPassword: yup
    .string()
    .min(4, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})



export default Account


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent:'center',
    alignItems:'center'
  },
  input: {
    borderWidth: 1,
    width: Constants.WIDTH - 40,
    borderColor: Color.lightBlue,
    borderRadius: 10,
    color: Color.gray
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.black,
    marginBottom: 10
  },
  textButton: {
    backgroundColor:Color.lightBlue,
    width: Constants.WIDTH - 40,
    textAlign: 'center',
    color: Color.white,
    fontSize:18,
    fontWeight:'600',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius:10
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  textError: {
    color: Color.primary
  }
})