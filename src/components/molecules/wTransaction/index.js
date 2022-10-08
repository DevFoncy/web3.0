/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Button from '@mui/material/Button';

import { useDebounce } from 'use-debounce';
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi';
import { utils } from 'ethers';
import WFormInput from '../../atoms/wFormInput';

export default function SendTransaction() {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [debouncedTo] = useDebounce(to, 500);
  const [debouncedValue] = useDebounce(amount, 500);

  const { config } = usePrepareSendTransaction({
    request: {
      to: debouncedTo,
      value: debouncedValue ? utils.parseEther(debouncedValue) : undefined,
    },
  });

  const { data, sendTransaction } = useSendTransaction(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  console.log('🚀exist ', !sendTransaction || !to || !amount);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendTransaction?.();
      }}
    >
      <WFormInput
        label="Recipient"
        placeholder="0xA0Cf…251e"
        onChange={(e) => setTo(e.target.value)}
        value={to}
      />
      <WFormInput
        label="Amount (ether)"
        placeholder="0.05"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />

      <Button
        disabled={isLoading || !sendTransaction || !to || !amount}
        size="small"
        style={{ color: '#03AB6E', borderColor: '#03AB6E', fontSize: '10px' }}
        variant="outlined"
        type="submit"
      >
        Reserve
      </Button>
      {isSuccess && (
        <div>
          Successfully sent {amount} ether to {to}
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </form>
  );
}
