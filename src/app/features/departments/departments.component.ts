import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  imports: [],
   standalone: true,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css',
})
export class DepartmentsComponent {

  currentDepartment = 0;
  departments = [

    {
      name: 'Chief Urologist',
      doctor: 'Dr. K. Saravanan',
      designation: 'Founder & Senior Consultant Urologist',
      qualification: 'MBBS, MS, M.Ch (Urology)',
      experience: '25+ Years Experience',
      image: 'assets/images/urology.jpg',
      services: [
        'Laser Kidney Stone Treatment',
        'Flexible Ureteroscopy',
        'PCNL Surgery',
        'Minimally Invasive Urology',
        'Men, Women & Children Urology',
        'A distinguished Urologist with years of experience in advanced urological treatments. Dr. Saravanan specialises in minimally invasive surgeries, laser kidney stone treatments, and comprehensive urological care for men, women, and children.'
      ]
    },

    {
      name: 'Chief Gynaecologist',
      doctor: 'Dr. D. Kavitha',
      designation: 'Founder & Senior Consultant Gynaecologist',
      qualification: 'MBBS, MS (OBG)',
      experience: '22+ Years Experience',
      image: 'assets/images/urology.jpg',
      services: [
        'Pregnancy Care',
        'High Risk Pregnancy',
        'Normal Delivery',
        'Caesarean Section',
        'Womens Health',
        'An expert Gynaecologist dedicated to womens health and maternity care. Dr. Kavitha provides compassionate care for mothers-to-be, handling everything from prenatal counseling to safe delivery and postpartum care.'
      ]
    },

    {
      name: 'Urology',
      doctor: 'Dr. R. Kumar',
      designation: 'Senior Consultant Urologist',
      qualification: 'MBBS, MS, M.Ch (Urology)',
      experience: '18+ Years Experience',
      image: 'assets/images/urology.jpg',
      services: [
        'Laser Kidney Stone Treatment',
        'Shockwave Lithotripsy',
        'Flexible Ureteroscopy',
        'PCNL Surgery'
      ]
    },

    {
      name: 'Gynaecology',
      doctor: 'Dr. Priya S.',
      designation: 'Senior Gynaecologist',
      qualification: 'MBBS, MS (OBG)',
      experience: '15+ Years Experience',
      image: 'assets/images/urology.jpg',
      services: [
        'Pregnancy Care',
        'Womens Health',
        'Normal Delivery'
      ]
    },

    {
      name: 'General Surgery',
      doctor: 'Dr. Suresh Kumar',
      designation: 'Senior General Surgeon',
      qualification: 'MBBS, MS (General Surgery)',
      experience: '20+ Years Experience',
      image: 'assets/doctors/general-surgery.jpg',
      services: [
        'Laparoscopic Surgery',
        'Hernia Surgery',
        'Gallbladder Surgery',
        'Appendix Surgery'
      ]
    },

    {
      name: 'General Medicine',
      doctor: 'Dr. Arun Prakash',
      designation: 'Senior Physician',
      qualification: 'MBBS, MD (General Medicine)',
      experience: '18+ Years Experience',
      image: 'assets/doctors/general-medicine.jpg',
      services: [
        'Diabetes Care',
        'Hypertension',
        'Fever Treatment',
        'Preventive Health Checkup'
      ]
    },

    {
      name: 'Nephrology',
      doctor: 'Dr. Naveen Kumar',
      designation: 'Consultant Nephrologist',
      qualification: 'MBBS, MD, DM (Nephrology)',
      experience: '16+ Years Experience',
      image: 'assets/doctors/nephrology.jpg',
      services: [
        'Kidney Care',
        'Dialysis',
        'Chronic Kidney Disease',
        'Renal Consultation'
      ]
    }

  ];

    nextDepartment() {

      if (this.currentDepartment < this.departments.length - 1) {
        this.currentDepartment++;
      } else {
        this.currentDepartment = 0;
      }

    }

    previousDepartment() {

      if (this.currentDepartment > 0) {
        this.currentDepartment--;
      } else {
        this.currentDepartment = this.departments.length - 1;
      }

    }}
