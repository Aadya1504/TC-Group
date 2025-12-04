import ScreenWrapper from "../components/ScreenWrapper.jsx";
import {TopBar} from "../components/TopBar.jsx";
import {SearchBar} from "../components/SearchBar.jsx";
import {CourseCard} from "../components/CourseCard.jsx";
import TopicTag from "../components/TopicTag.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function Home() {
  return (
    <ScreenWrapper>
      <div className="p-4 space-y-4">

        <TopBar />

        <SearchBar placeholder="Search micro courses" />

        {/* Continue learning */}
        <div>
          <h2 className="text-lg font-semibold">Continue learning</h2>
          <p className="text-sm text-gray-600">Psychology of High Performance</p>
          <p className="text-xs text-gray-500">0:43</p>
        </div>

        {/* Popular Topics */}
        <div>
          <h2 className="text-lg font-semibold">Popular Micro Topics</h2>

          <div className="flex flex-wrap gap-2">
            <TopicTag text="Excel Tips" />
            <TopicTag text="Chemistry" />
            <TopicTag text="Web Design" />
            <TopicTag text="Algebra" />
          </div>
        </div>

        {/* Recommended */}
        <div>
          <h2 className="text-lg font-semibold">Recommended for you</h2>
          <div className="space-y-3">
            <CourseCard 
              title="Basics of SQL Queries"
              author="Emily Carter"
              duration="2 min"
            />
            <CourseCard 
              title="Data Structures & Algorithms"
              author="Alex Singh"
              duration="8 min"
            />
          </div>
        </div>

      </div>

      <BottomNav />
    </ScreenWrapper>
  );
}
