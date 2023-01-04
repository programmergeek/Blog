import { useState } from "react";

export default function Search() {
  const [results, updateResults] = useState<any>([]);
  const [loading, updateLoading] = useState(true);
  const [currentPage, updateCurrentPage] = useState(1);
  const [total, updateTotal] = useState(0);

  return <p></p>;
}
