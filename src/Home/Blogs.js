import React from "react";

const Blogs = () => {
  return (
    <div className='m-9'>
      <h2 className='text-center text-2xl'>
        How will you improve the performance of a React Application?
      </h2>
      <p>
        Keeping component state local where necessary. Memoizing React
        components to prevent unnecessary re-renders. Code-splitting in React
        using dynamic import() Windowing or list virtualization in React. Lazy
        loading images in React
      </p>
      <h2 className='text-center text-2xl'>
        What are the different ways to manage a state in a React application?
      </h2>
      <p>
        The built-in way that React provides for setting component states is by
        using setState() and adding “local state” to a class. There are several
        other ways to manage state​s in React, including the use of: Hooks React
        Context API Apollo Link State
      </p>
      <h2 className='text-center text-2xl'>
        How does prototypical inheritance work?
      </h2>
      <p>
        Javascript’s version of class-based programming and other traditional
        class-based programming languages work with the same concept but does
        not work exactly similar. There are differences in its keyword, syntax,
        and how it works. There are also debates regarding pros and cons of
        Javascript’s version of class-based programming, but for simplicity’s
        sake and learning purposes. So, the core idea of Prototypal Inheritance
        is that an object can point to another object and inherit all its
        properties. The main purpose is to allow multiple instances of an object
        to share common properties, hence, the Singleton Pattern.
      </p>
      <h2 className='text-center text-2xl'>
        Why you do not set the state directly in React. For example, if you have
        const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h2>
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class. React provides a small number of
        functions, or hooks, to enable it to track values in your components and
        keep the state and UI in sync. For single values it gives us the
        useState hook and that’s the hook we’ll explore in this article. We’ll
        look at how to call the hook, what it returns, and how we use it to
        update the state, triggering React to update the UI. It’s not just a
        matter of documenting the useState API – you can go to the official
        React docs for that – we’ll use the discussion of the useState hook to
        help us better understand what function components are and how they
        work. To that end, we finish the article with a review of some key
        concepts.
      </p>
      <h2 className='text-center text-2xl'>
        What is a unit test? Why should write unit tests?
      </h2>
      <p>
        A unit test is a way of testing a unit - the smallest piece of code that
        can be logically isolated in a system. In most programming languages,
        that is a function, a subroutine, a method or property. The isolated
        part of the definition is important. In his book "Working Effectively
        with Legacy Code", author Michael Feathers states that such tests are
        not unit tests when they rely on external systems: “If it talks to the
        database, it talks across the network, it touches the file system, it
        requires system configuration, or it can't be run at the same time as
        any other test."
      </p>
    </div>
  );
};

export default Blogs;
