const BackgroundDashboard = () => {
    return (
<div className="absolute inset-0 z-0 overflow-hidden">
<video autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://cdn.pixabay.com/video/2022/07/11/123817-729035790_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default BackgroundDashboard;
  