'use client';
import React from 'react';
import UserCardWrapper from './user-card-wrapper';
import CardWrapper from './card-wrapper';

const User = () => {
  return (
    <main className="min-h-screen p-6">
      <div className="lg:grid lg:grid-cols-[448px_1fr] lg:space-x-12">
        <UserCardWrapper />
        <CardWrapper />
      </div>
    </main>
  );
};

export default User;
