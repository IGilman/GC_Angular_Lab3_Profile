import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  editProfile(form: NgForm): void {
    let updateProfile: UserProfile = {
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio
    }
    this.profileService.setUserProfile(updateProfile);
    this.router.navigate(["profile"])

  }

}
