NavLink

```javascript
<NavLink
  to={`/invoices/${invoice.number}`}
  key={invoice.number}
  style={(isActive) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "red" : "",
    };
  }}
>
  {invoice.name}
</NavLink>
```
