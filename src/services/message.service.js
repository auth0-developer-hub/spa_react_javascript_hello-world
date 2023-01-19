export const getPublicResource = async () => {
  return {
    data: {
      text: "This is a public message.",
    },
  };
};

export const getProtectedResource = async () => {
  return {
    data: {
      text: "This is a protected message.",
    },
  };
};

export const getAdminResource = async () => {
  return {
    data: {
      text: "This is an admin message.",
    },
  };
};
