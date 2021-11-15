import React, { useEffect, useState } from 'react';
import { Flex, Box, Text, Spinner } from '@chakra-ui/react';
import Post from './pages/Post';

export default function BlogContainer() {
  const [posts, setPosts] = useState();
  const fetchPosts = async () => {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@libaration'
    );
    const responseJSON = await response.json();
    setPosts(responseJSON.items);
    console.log(responseJSON);
  };
  const renderPosts = () => {
    return posts.map((post, index) => {
      return (
        <Post
          key={index}
          description={post.description}
          title={post.title}
          thumbnail={post.thumbnail}
          createdOn={post.pubDate}
          link={post.link}
        />
      );
    });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Flex justifyContent="center" flexDirection="column" mt={5}>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box w="100%">
          <Text textAlign="left" p={3} size="sm">
            Blog
          </Text>
        </Box>
        <Box>{posts ? renderPosts() : <Spinner
              size="xl"
              position="absolute"
            />}</Box>
      </Flex>
    </Flex>
  );
}
