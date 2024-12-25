import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const categories = [
  { id: 1, name: 'General Discussion' },
  { id: 2, name: 'Courses Feedback' },
  { id: 3, name: 'Technical Support' },
  { id: 4, name: 'Innovation Ideas' }
];

const topicsData = [
  { id: 1, categoryId: 1, title: 'Welcome to the Forum', replies: 5 },
  { id: 2, categoryId: 1, title: 'Tesla Course Materials', replies: 12 },
  { id: 3, categoryId: 2, title: 'Feedback on Web Development Course', replies: 8 },
  { id: 4, categoryId: 3, title: 'Need help with React', replies: 15 }
];

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTopic(null); // Reset topic when selecting a new category
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setComments([
      { id: 1, text: 'This is a great topic!', user: 'John Doe' },
      { id: 2, text: 'I agree with this!', user: 'Jane Smith' }
    ]); // Set default comments
  };

  const handleAddComment = () => {
    setComments([...comments, { id: comments.length + 1, text: newComment, user: 'Anonymous' }]);
    setNewComment('');
  };

  const filteredTopics = selectedCategory
    ? topicsData.filter((topic) => topic.categoryId === selectedCategory.id)
    : [];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Tesla Academy Forum</h1>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="bg-indigo-400 text-white p-6 rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300"
            >
              <h2 className="text-2xl font-semibold">{category.name}</h2>
            </button>
          ))}
        </div>

        {/* Topics Section */}
        {selectedCategory && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-center mb-6">{selectedCategory.name}</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul>
                {filteredTopics.map((topic) => (
                  <li
                    key={topic.id}
                    className="border-b py-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleTopicClick(topic)}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-xl font-semibold">{topic.title}</h3>
                      <span>{topic.replies} replies</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Discussion Section */}
        {selectedTopic && (
          <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedTopic.title}</h2>

            {/* Comments */}
            <ul className="mb-6">
              {comments.map((comment) => (
                <li key={comment.id} className="border-b py-4">
                  <p className="font-semibold">{comment.user}</p>
                  <p>{comment.text}</p>
                </li>
              ))}
            </ul>

            {/* Add Comment */}
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add your comment"
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            />
            <button
              onClick={handleAddComment}
              className="bg-teal-500 text-white p-3 rounded-lg"
            >
              Post Comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export default Forum;
