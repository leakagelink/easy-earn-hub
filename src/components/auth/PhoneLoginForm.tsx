
import React from 'react';
import { Button } from '@/components/ui/button';
import PhoneInput from './PhoneInput';
import PasswordField from './PasswordField';
import RememberMeCheckbox from './RememberMeCheckbox';
import { LoginMethod } from './useLoginForm';

interface PhoneLoginFormProps {
  phone: string;
  setPhone: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
  isLoading: boolean;
  handleLogin: (e: React.FormEvent) => void;
}

const PhoneLoginForm: React.FC<PhoneLoginFormProps> = ({
  phone,
  setPhone,
  password,
  setPassword,
  showPassword,
  togglePasswordVisibility,
  rememberMe,
  setRememberMe,
  isLoading,
  handleLogin
}) => {
  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <PhoneInput phone={phone} setPhone={setPhone} />
      
      <PasswordField 
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        id="password-phone"
      />
      
      <div className="flex items-center justify-between">
        <RememberMeCheckbox 
          rememberMe={rememberMe} 
          setRememberMe={setRememberMe}
          id="remember-me-phone"
        />
        <a 
          href="#" 
          className="text-sm text-easyearn-purple hover:text-easyearn-darkpurple hover:underline"
        >
          Forgot password?
        </a>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-easyearn-purple hover:bg-easyearn-darkpurple text-white py-2.5"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : 'Sign In'}
      </Button>
    </form>
  );
};

export default PhoneLoginForm;
