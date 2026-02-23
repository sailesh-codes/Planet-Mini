import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";
import NotFound from "@/pages/not-found";
import { Layout } from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop/style" component={Home} />
        <Route path="/shop/age" component={Home} />
        <Route path="/shop/care" component={Home} />
        <Route path="/products/:slug" component={Home} />
        <Route path="/cart" component={Home} />
        <Route path="/checkout" component={Home} />
        <Route path="/account" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/contact" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
