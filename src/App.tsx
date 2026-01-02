import type { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/app/AppShell'
import { LandingPage } from '@/pages/LandingPage'
import { AdminDashboard } from '@/pages/admin/AdminDashboard'
import { AdminClasses } from '@/pages/admin/AdminClasses'
import { AdminTeachers } from '@/pages/admin/AdminTeachers'
import { AdminStudents } from '@/pages/admin/AdminStudents'
import { AdminAttendance } from '@/pages/admin/AdminAttendance'
import { AdminAnnouncements } from '@/pages/admin/AdminAnnouncements'
import { AdminFees } from '@/pages/admin/AdminFees'
import { TeacherDashboard } from '@/pages/teacher/TeacherDashboard'
import { TeacherAttendance } from '@/pages/teacher/TeacherAttendance'
import { TeacherUpdates } from '@/pages/teacher/TeacherUpdates'
import { TeacherAnnouncements } from '@/pages/teacher/TeacherAnnouncements'
import { ParentDashboard } from '@/pages/parent/ParentDashboard'
import { ParentChildDay } from '@/pages/parent/ParentChildDay'
import { ParentAnnouncements } from '@/pages/parent/ParentAnnouncements'
import { ParentFees } from '@/pages/parent/ParentFees'
import type { Role } from '@/data/mock'

function RoleLayout({
  role,
  title,
  children,
}: {
  role: Role
  title: string
  children: ReactNode
}) {
  return (
    <AppShell role={role} title={title}>
      {children}
    </AppShell>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/admin"
          element={
            <RoleLayout role="admin" title="Admin Portal">
              <AdminDashboard />
            </RoleLayout>
          }
        />
        <Route
          path="/admin/classes"
          element={
            <RoleLayout role="admin" title="Admin Portal">
              <AdminClasses />
            </RoleLayout>
          }
        />
        <Route
          path="/admin/teachers"
          element={
            <RoleLayout role="admin" title="Admin Portal">
              <AdminTeachers />
            </RoleLayout>
          }
        />
        <Route
          path="/admin/students"
          element={
            <RoleLayout role="admin" title="Admin Portal">
              <AdminStudents />
            </RoleLayout>
          }
        />
        <Route
          path="/admin/attendance"
          element={
            <RoleLayout role="admin" title="Admin Portal">
              <AdminAttendance />
            </RoleLayout>
          }
        />
        <Route
          path="/admin/announcements"
          element={
            <RoleLayout role="admin" title="Admin Portal">
              <AdminAnnouncements />
            </RoleLayout>
          }
        />
        <Route
          path="/admin/fees"
          element={
            <RoleLayout role="admin" title="Admin Portal">
              <AdminFees />
            </RoleLayout>
          }
        />

        <Route
          path="/teacher"
          element={
            <RoleLayout role="teacher" title="Teacher Portal">
              <TeacherDashboard />
            </RoleLayout>
          }
        />
        <Route
          path="/teacher/attendance"
          element={
            <RoleLayout role="teacher" title="Teacher Portal">
              <TeacherAttendance />
            </RoleLayout>
          }
        />
        <Route
          path="/teacher/updates"
          element={
            <RoleLayout role="teacher" title="Teacher Portal">
              <TeacherUpdates />
            </RoleLayout>
          }
        />
        <Route
          path="/teacher/announcements"
          element={
            <RoleLayout role="teacher" title="Teacher Portal">
              <TeacherAnnouncements />
            </RoleLayout>
          }
        />

        <Route
          path="/parent"
          element={
            <RoleLayout role="parent" title="Parent Portal">
              <ParentDashboard />
            </RoleLayout>
          }
        />
        <Route
          path="/parent/child"
          element={
            <RoleLayout role="parent" title="Parent Portal">
              <ParentChildDay />
            </RoleLayout>
          }
        />
        <Route
          path="/parent/announcements"
          element={
            <RoleLayout role="parent" title="Parent Portal">
              <ParentAnnouncements />
            </RoleLayout>
          }
        />
        <Route
          path="/parent/fees"
          element={
            <RoleLayout role="parent" title="Parent Portal">
              <ParentFees />
            </RoleLayout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
