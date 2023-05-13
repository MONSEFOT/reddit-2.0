import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query MyQuery {
    postList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`

export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    postListByPostId(post_id: $post_id) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    postListByTopic(topic: $topic) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`

export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    subredditListLimit(limit: $limit) {
      created_at
      id
      topic
    }
  }
`

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    votesByPostId(post_id: $post_id) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`

export const ADD_COMMENT = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id: $post_id, text: $text, username: $username) {
      created_at
      id
      post_id
      text
      username
    }
  }
`

export const ADD_VOTE = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $upvote: Boolean!) {
    insertVote(post_id: $post_id, username: $username, upvote: $upvote) {
      id
      created_at
      post_id
      upvote
      username
    }
  }
`

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    subredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`
