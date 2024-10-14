"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser() as {
    isSignedIn: boolean;
    user: { fullName?: string };
    isLoaded: boolean;
  };

  return (
    <main>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {!isLoaded && <p>Loading...</p>}
      {isSignedIn && <p>You are signed in, Hello {user.fullName}</p>}
      {!isSignedIn && <p>You are not signed in</p>}
    </main>
  );
}
