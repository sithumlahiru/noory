export type Role = 'admin' | 'teacher' | 'parent'

export const schoolInfo = {
  name: 'Noory Garden Preschool',
  location: 'Kandy, Sri Lanka',
  term: 'Term 2 · Week 3',
}

export const classes = [
  {
    id: 'sunflower',
    name: 'Sunflower',
    teacher: 'Ms. Perera',
    students: 18,
    room: 'A1',
    status: 'On track',
  },
  {
    id: 'lotus',
    name: 'Lotus',
    teacher: 'Mr. Silva',
    students: 16,
    room: 'B2',
    status: 'Needs cover',
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    teacher: 'Ms. Jayasinghe',
    students: 14,
    room: 'C1',
    status: 'On track',
  },
]

export const teachers = [
  {
    id: 't1',
    name: 'Ms. Perera',
    className: 'Sunflower',
    phone: '+94 77 201 4402',
    rating: '4.9',
  },
  {
    id: 't2',
    name: 'Mr. Silva',
    className: 'Lotus',
    phone: '+94 71 523 9931',
    rating: '4.6',
  },
  {
    id: 't3',
    name: 'Ms. Jayasinghe',
    className: 'Rainbow',
    phone: '+94 76 210 8852',
    rating: '4.8',
  },
]

export const students = [
  {
    id: 's1',
    name: 'Ayaan Fernando',
    className: 'Sunflower',
    age: 4,
    guardian: 'Nimali Fernando',
    pickup: '4:00 PM',
    notes: 'Peanut allergy',
  },
  {
    id: 's2',
    name: 'Maya Senanayake',
    className: 'Sunflower',
    age: 3,
    guardian: 'Kavindi Senanayake',
    pickup: '3:30 PM',
    notes: 'Prefers warm milk',
  },
  {
    id: 's3',
    name: 'Lihini Peris',
    className: 'Sunflower',
    age: 4,
    guardian: 'Harsha Peris',
    pickup: '4:15 PM',
    notes: 'Emergency contact on file',
  },
  {
    id: 's4',
    name: 'Kavi Abeyratne',
    className: 'Lotus',
    age: 5,
    guardian: 'Thilini Abeyratne',
    pickup: '4:00 PM',
    notes: 'Shy in group activities',
  },
]

export const announcements = [
  {
    id: 'a1',
    title: 'Uniform check Friday',
    detail: 'Please send clean uniforms by 8:30 AM. Label all items.',
    scope: 'School-wide',
    date: 'Sep 12',
    reads: '82%',
  },
  {
    id: 'a2',
    title: 'Parent meeting',
    detail: 'Monthly meeting on Sep 18 at 4:30 PM in the main hall.',
    scope: 'School-wide',
    date: 'Sep 18',
    reads: '64%',
  },
  {
    id: 'a3',
    title: 'Rainy week reminder',
    detail: 'Send extra clothes and an umbrella for your child.',
    scope: 'Sunflower Class',
    date: 'Sep 20',
    reads: '58%',
  },
]

export const attendance = [
  { name: 'Ayaan Fernando', status: 'Present', checkIn: '8:12 AM' },
  { name: 'Maya Senanayake', status: 'Present', checkIn: '8:18 AM' },
  { name: 'Lihini Peris', status: 'Late', checkIn: '8:42 AM' },
  { name: 'Kavi Abeyratne', status: 'Absent', checkIn: '—' },
]

export const dailyUpdates = [
  { label: 'Meals', value: 'Finished lunch', detail: 'Rice + veggies' },
  { label: 'Nap', value: '1h 20m', detail: '12:30 PM - 1:50 PM' },
  { label: 'Mood', value: 'Happy', detail: 'Loved story time' },
  { label: 'Activity', value: 'Painting', detail: 'Colors + shapes' },
]

export const pickupLog = [
  { time: '3:20 PM', student: 'Maya', status: 'Confirmed' },
  { time: '3:45 PM', student: 'Ayaan', status: 'Confirmed' },
  { time: '4:10 PM', student: 'Lihini', status: 'Waiting' },
]

export const feeStatus = [
  { name: 'Ayaan Fernando', className: 'Sunflower', amount: 'LKR 8,500', status: 'Paid' },
  { name: 'Maya Senanayake', className: 'Sunflower', amount: 'LKR 8,500', status: 'Pending' },
  { name: 'Lihini Peris', className: 'Sunflower', amount: 'LKR 8,500', status: 'Overdue' },
  { name: 'Kavi Abeyratne', className: 'Lotus', amount: 'LKR 8,500', status: 'Paid' },
]

export const parentProfile = {
  child: 'Lihini Peris',
  className: 'Sunflower',
  age: 4,
  guardian: 'Harsha Peris',
  attendance: 'Present',
}

export const weeklyHighlights = [
  { label: 'Teacher weekly active', value: '74%' },
  { label: 'Parent weekly active', value: '63%' },
  { label: 'Onboarding time', value: '42 min' },
]
