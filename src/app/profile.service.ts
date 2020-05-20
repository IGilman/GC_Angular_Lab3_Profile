import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: UserProfile =
    {
      name: "Isaac",
      contact: "Isaac@aol.com",
      bio: "Handstands are cool"
    };

  constructor() { }

  getUserProfile(): UserProfile {
    return this.profile;
  }

  setUserProfile(profile: UserProfile): void {
    this.profile = profile;
  }

}