export default {
    User: [
    {
        user_id: 1,
        name: 'Michelle',
        created_at: '2020-11-08 05:51:11'
    },
    {
        user_id: 2,
        name: 'Claudia',
        created_at: '2020-11-08 05:52:11'
    },
    {
        user_id: 3,
        name: 'Ellie',
        created_at: '2020-11-08 05:53:11'
    },
],
Content: [
    {
        content_id: 1,
        user_id: 1,
        title: "Michelle's class schedule",
        context: 'TBA',
        created_at: '202011-08 06:00:01',
        updated_at: null
    },
    {
        content_id: 2,
        user_id: 3,
        title: "Ellie's class schedule",
        context: 'TBA',
        created_at: '202011-08 06:06:01',
        updated_at: null
    },
    {
        content_id: 3,
        user_id: 2,
        title: "Can't wait for the next Zoom class^^",
        context: 'TBA',
        created_at: '202011-08 06:06:01',
        updated_at: null
    }
],
Comment: [
    {
        comment_id: 1,
        user_id: 1,
        comment_id: 3,
        context: "Thanks for sharing!",
        created_at: '2020-11-09 13:19:11',
        updated_at: null
    },
    {
        comment_id: 2,
        user_id: 3,
        comment_id: 3,
        context: "Can't wait!",
        created_at: '2020-11-09 13:20:11',
        updated_at: null
    },
    {
        comment_id: 3,
        user_id: 2,
        comment_id: 1,
        context: "waiting for the update",
        created_at: '2020-11-09 13:23:11',
        updated_at: null
    }
],
SubComment: [
    {
        subcomment_id: 1,
        comment_id: 3,
        content_id: 3,
        context: "Good for you. I personally do not enjoy Zoom classes.",
        created_at: '2020-11-09 18:11:13',
        updated_at: null
    }
]
}
