interface Props {
  schema: Record<string, any>;
}

function SchemaScript(props: Props) {
  const { schema } = props;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default SchemaScript;
