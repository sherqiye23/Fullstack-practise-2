import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const consultingApi = createApi({
    reducerPath: 'consultingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/' }),
    endpoints: (builder) => ({
        getConsultings: builder.query({
            query: () => `consulting`,
        }),
        getConsultingById: builder.query({
            query: (id) => `consulting/${id}`,
        }),
        addConsulting: builder.mutation({
            query: (newData) => ({
                method: "POST",
                url: "consulting",
                body: newData,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }),
        deleteConsulting: builder.mutation({
            query: (id) => ({
                method: "DELETE",
                url: `consulting/${id}`
            })
        })
    }),
})

export const { useAddConsultingMutation, useDeleteConsultingMutation, useGetConsultingByIdQuery, useGetConsultingsQuery } = consultingApi