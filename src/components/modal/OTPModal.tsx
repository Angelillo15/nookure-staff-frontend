import useEditorStorage from '@/store/editorStorage';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import LockClosed from '../icons/LockClosed';
import { useEffect, useState } from 'react';

const OTPModal = () => {
  const isAuthenticated = useEditorStorage(state => state.authenticated);
  const username = useEditorStorage(state => state.username);

  const [otp, setOTP] = useState('');
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (otp.length === 6) {
      setActive(false);
    }
  }, [otp]);

  return (
    <Dialog open={!isAuthenticated}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Enter the OTP for {username}</DialogTitle>
          <DialogDescription>You will find it in the chat.</DialogDescription>
        </DialogHeader>
        <LockClosed className='block m-auto size-32 justify-center text-stone-200' />
        <div className='flex justify-center'>
          <InputOTP maxLength={6} value={otp} onChange={value => setOTP(value)} disabled={!active}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OTPModal;
